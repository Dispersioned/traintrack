'use client';
import { TimeSelector } from '@/components/time-selector';
import { loadValuesFromLocalStore } from '@/helpers/loadValuesFromLocalStore';
import { saveValuesToLocalStore } from '@/helpers/saveValuesToLocalStore';
import { useState, useEffect, ChangeEvent } from 'react';

export default function Home() {
  const [values, setValues] = useState(loadValuesFromLocalStore());

  useEffect(() => {
    saveValuesToLocalStore(values);
  }, [values]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (isNaN(newValue)) return;
    setValues((values) => ({
      ...values,
      [e.target.name]: newValue,
    }));
  };

  return (
    <div>
      <TimeSelector values={values} onChange={onChange} />
    </div>
  );
}
