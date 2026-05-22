import type React from 'react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Checkbox, FormField, Input, RadioButton, SelectField } from 'scorer-ui-kit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  colour: string;
  email: string;
  preference: string;
  flavours: string[];
};

const PREFERENCE_OPTIONS = [
  { value: 'mountain', label: 'Mountain' },
  { value: 'ocean', label: 'Ocean' },
] as const;

const FLAVOUR_OPTIONS = [
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
] as const;

const RHFSpikePage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const methods = useForm<FormValues>({
    mode: 'onTouched',
    defaultValues: { name: '', colour: '', email: '', preference: '', flavours: [] },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <div style={{ padding: '32px', maxWidth: '400px' }}>
      <h1>React Hook Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormField
            name='name'
            label='Name'
            required
            rules={{ required: 'Name is required' }}
          >
            {({ field, fieldState, id, errorId, 'aria-invalid': ariaInvalid }) => (
              <Input
                {...field}
                id={id}
                fieldState={fieldState}
                aria-invalid={ariaInvalid}
                aria-describedby={errorId}
              />
            )}
          </FormField>
          <FormField
            name='colour'
            label='Favourite colour'
            required
            rules={{ required: 'Favourite colour is required' }}
          >
            {({ field, fieldState, id, errorId, 'aria-invalid': ariaInvalid }) => (
              <SelectField
                ref={field.ref}
                id={id}
                fieldState={fieldState}
                aria-invalid={ariaInvalid}
                aria-describedby={errorId}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                placeholder='Select a colour'
              >
                <option value='red'>Red</option>
                <option value='green'>Green</option>
                <option value='blue'>Blue</option>
              </SelectField>
            )}
          </FormField>
          <FormField
            name='email'
            label='Email'
            required
            hint='We never share your email.'
            rules={{
              required: 'Email is required',
              pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' },
            }}
          >
            {({ field, fieldState, id, errorId, 'aria-invalid': ariaInvalid }) => (
              <Input
                {...field}
                id={id}
                type='email'
                fieldState={fieldState}
                aria-invalid={ariaInvalid}
                aria-describedby={errorId}
              />
            )}
          </FormField>
          <FormField name='preference' label='Mountain or ocean' variant='group'>
            {({ field }) => (
              <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                {PREFERENCE_OPTIONS.map(({ value, label }) => (
                  <label
                    key={value}
                    htmlFor={`preference-${value}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                  >
                    <RadioButton
                      id={`preference-${value}`}
                      name='preference'
                      value={value}
                      currentChecked={field.value}
                      onChangeCallback={field.onChange}
                      onBlur={field.onBlur}
                    />
                    {label}
                  </label>
                ))}
              </div>
            )}
          </FormField>
          <FormField
            name='flavours'
            label='Favourite ice cream flavours'
            variant='group'
            rules={{
              validate: (v: string[]) => (v ?? []).length > 0 || 'Pick at least one flavour',
            }}
          >
            {({ field }) => (
              <div style={{ display: 'flex', gap: '16px', marginTop: '4px', flexWrap: 'wrap' }}>
                {FLAVOUR_OPTIONS.map(({ value, label }) => (
                  <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Checkbox
                      id={`flavour-${value}`}
                      controlled
                      checked={(field.value as string[]).includes(value)}
                      onChangeCallback={(isChecked) => {
                        const current: string[] = field.value ?? [];
                        field.onChange(
                          isChecked ? [...current, value] : current.filter((v) => v !== value)
                        );
                      }}
                    />
                    <label htmlFor={`flavour-${value}`} style={{ cursor: 'pointer' }}>
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </FormField>
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

export default RHFSpikePage;
