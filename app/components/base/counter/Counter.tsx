'useClient';

import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

type Props = { inputName: string };

export default function Counter({ inputName }: Props) {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex items-center gap-4">
      <input hidden name={inputName} value={count} />
      <Button
        disabled={count === 0}
        variant={'outline'}
        size={'icon'}
        type="button"
        onClick={() => setCount(count - 1)}
      >
        <MinusIcon className="h-4 w-4 text-rose-500" />
      </Button>
      <p>{count}</p>
      <Button variant={'outline'} size={'icon'} type="button" onClick={() => setCount(count + 1)}>
        <PlusIcon className="h-4 w-4 text-rose-500" />
      </Button>
    </div>
  );
}
