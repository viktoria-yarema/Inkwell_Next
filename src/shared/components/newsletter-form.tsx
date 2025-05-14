'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-light-blue rounded-2xl p-8 md:p-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with the latest teaching resources, activities, and tips for parents and
          educators.
        </p>

        {isSuccess ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-grow"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-yellow hover:bg-primary-yellow/90 text-white"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        )}
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
