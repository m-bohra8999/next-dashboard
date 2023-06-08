import React from 'react';
import { Lato } from 'next/font/google';
import Image from 'next/image';
import { Input } from './Input';
import Link from 'next/link';
import SocialLogin from './SocialLogin';
import Card from './Card';
import CustomLink from './CustomLink';

interface Props {}

const LoginForm = (props: Props) => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl font-bold'>Sign In</h1>
      <p className={`font-lato`}>Sign in to your account</p>
      <div className='flex gap-6 py-6'>
        <SocialLogin logoUrl='/google-logo.svg' text='Sign in with Google' />
        <SocialLogin logoUrl='/apple-logo.svg' text='Sign in with Apple' />
      </div>
      <Card className='rounded-md'>
        <form className='flex flex-col'>
          <label htmlFor='email' className={`font-lato`}>
            Email address
          </label>
          <Input
            type='email'
            id='email'
            aria-describedby='email'
            name='email'
            className='mt-2.5'
            required
          />

          <label htmlFor='password' className={`font-lato mt-5`}>
            Password
          </label>
          <Input
            type='password'
            id='password'
            aria-describedby='password'
            name='password'
            className='mt-2.5'
            required
          />

          <CustomLink href='#' className='mt-5'>
            Forgot password?
          </CustomLink>

          <button
            type='submit'
            className='inline-flex items-center justify-center h-10 mt-5 font-bold text-white transition-colors bg-black rounded shadow-sm hover:opacity-80'
          >
            Sign In
          </button>
        </form>
      </Card>
      <div className='flex justify-center mt-4'>
        <p className={`font-lato text-[#858585]`}>
          Don’t have an account?{' '}
          <span>
            <CustomLink href={'#'}>Register here</CustomLink>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
