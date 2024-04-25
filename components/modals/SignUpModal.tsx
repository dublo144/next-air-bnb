'use client';

import React from 'react';
import { Github } from 'lucide-react';
import { useCallback, useState } from 'react';
import useSignUpModal from '@/hooks/useSignUpModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Modal from '../base/modal/Modal';

type Props = {};

export default function SignUpModal({}: Props) {
  const registerModal = useSignUpModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post('/api/signUp', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  };

  const bodyContent = <div className="flex flex-col gap-4"></div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Join us!"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
