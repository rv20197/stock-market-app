'use client';
import { CountrySelectField } from '@/components/forms/CountrySelectField';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from '@/lib/constants';
import { SubmitHandler, useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'IN',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
    mode: 'onBlur',
  });

  const onSubmitHandler: SubmitHandler<SignUpFormData> = async (data: SignUpFormData) => {
    try {
      console.log('Form Data:', data);
      // Handle form submission logic here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <h1 className='form-title'>Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmitHandler)} className='space-y-5'>
        <InputField
          name='fullName'
          label='Full Name'
          placeholder='John Doe'
          type='text'
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full Name is required', minLength: 2 }}
        />
        <InputField
          name='email'
          label='Email'
          placeholder='john.doe@example.com'
          register={register}
          type='email'
          error={errors.email}
          validation={{
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/, message: 'Email is invalid' },
          }}
        />
        <InputField
          name='password'
          label='Password'
          placeholder='••••••••'
          register={register}
          error={errors.password}
          type='password'
          validation={{ required: 'Password is required', minLength: 8 }}
        />

        <CountrySelectField
          name='country'
          label='Country'
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name='Investment Goals'
          label='Investment Goals'
          placeholder='Select Investment Goals'
          control={control}
          error={errors.investmentGoals}
          options={INVESTMENT_GOALS}
          required
        />

        <SelectField
          name='Risk Tolerance'
          label='Risk Tolerance'
          placeholder='Select Risk Tolerance'
          control={control}
          error={errors.riskTolerance}
          required
          options={RISK_TOLERANCE_OPTIONS}
        />

        {/* Preferred Industry Selection */}
        <SelectField
          name='Preferred Industry'
          label='Preferred Industry'
          placeholder='Select Preferred Industry'
          control={control}
          error={errors.preferredIndustry}
          required
          options={PREFERRED_INDUSTRIES}
        />

        <Button type='submit' className='w-full yellow-btn mt-5' disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Start your investment journey'}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
