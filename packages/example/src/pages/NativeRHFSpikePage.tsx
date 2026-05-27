import type React from 'react';
import { useState } from 'react';
import { FormProvider, useController, useForm } from 'react-hook-form';
import { Button, Input, SelectField } from 'scorer-ui-kit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  colour: string;
  email: string;
};

const NameField: React.FC = () => {
  const { field, fieldState } = useController<FormValues, 'name'>({
    name: 'name',
    rules: { required: 'Name is required' },
  });
  return <Input {...field} label='Name' required error={fieldState.error?.message} />;
};

const ColourField: React.FC = () => {
  const { field, fieldState } = useController<FormValues, 'colour'>({
    name: 'colour',
    rules: { required: 'Favourite colour is required' },
  });
  return (
    <SelectField
      {...field}
      label={{ htmlFor: 'colour', text: 'Favourite colour', required: true }}
      error={fieldState.error?.message}
      placeholder='Select a colour'
    >
      <option value='red'>Red</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
    </SelectField>
  );
};

const EmailField: React.FC = () => {
  const { field, fieldState } = useController<FormValues, 'email'>({
    name: 'email',
    rules: {
      required: 'Email is required',
      pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' },
    },
  });
  return (
    <Input
      {...field}
      type='email'
      label='Email'
      required
      hint='We never share your email.'
      error={fieldState.error?.message}
    />
  );
};

const NativeRHFSpikePage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const methods = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: { name: '', colour: '', email: '' },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '400px' }}>
      <h1>React Hook Form (Native)</h1>
      <p style={{ color: 'var(--grey-11)', fontSize: '14px' }}>
        Input and SelectField rendering their own label/error/hint — no FormField wrapper.
      </p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <NameField />
          <ColourField />
          <EmailField />
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

export default NativeRHFSpikePage;
