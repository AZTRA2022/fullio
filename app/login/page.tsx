'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import supabase from '@/lib/supabase';
import { useEffect } from 'react';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useState } from 'react';

// Define validation schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
});

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter(); // Initialize useRouter
  const [loading, setLoading] = useState(true); // Add loading state

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true); // Start loading
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email.toString(),
        password: values.password.toString(),
      });

      if (error) {
        console.error('Error login:', error.message);
        toast(`Login failed: ${error.message}`); 
      } else {
        await router.push('/services'); // Use router.push
        toast(
          "Success",
        )
      }
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  }

  useEffect(() => {
    const checkUser = async () => {

      setLoading(true);
      const user = (await supabase.auth.getSession()).data.session;
      if (user) {
        console.log(user)
        router.push('/services');
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  return (
    <div className="flex  min-h-[60vh] h-full w-full items-center justify-center px-4">
      <Card className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Connectez vous afin d'acceder aux etapes suivantes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-2 justify-center w-full">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 ">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="...@ext.domain"
                          type="email"
                          autoComplete="email"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="type your password here."
                          type="password"
                          autoComplete="off"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  Se connecter
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}