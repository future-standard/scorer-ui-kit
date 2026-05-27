import type React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, SelectField } from 'scorer-ui-kit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  colour: string;
  email: string;
};

const IntegratedNativeRHFSpikePage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const methods = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: { name: '', colour: '', email: '' },
  });

  const onSubmit = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '400px' }}>
      <h1>React Hook Form (Integrated)</h1>
      <p style={{ color: 'var(--grey-11)', fontSize: '14px' }}>
        Input and SelectField subscribe to React Hook Form themselves — no per-field useController.
      </p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Input name='name' label='Name' required rules={{ required: 'Name is required' }} />
          <SelectField
            name='colour'
            label='Favourite colour'
            required
            placeholder='Select a colour'
            options={[
              { value: 'red', label: 'Red' },
              { value: 'green', label: 'Green' },
              { value: 'blue', label: 'Blue' },
            ]}
            rules={{ required: 'Favourite colour is required' }}
          />
          <Input
            name='email'
            type='email'
            label='Email'
            required
            hint='We never share your email.'
            rules={{
              required: 'Email is required',
              pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' },
            }}
          />
          <div style={{ marginTop: '24px' }}>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </FormProvider>
      {submittedData !== null && (
        <pre data-testid='submitted' style={{ marginTop: '16px', whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(submittedData, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default IntegratedNativeRHFSpikePage;
