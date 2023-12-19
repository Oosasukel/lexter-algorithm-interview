'use client';

import { Button } from '@/components/Button';
import { Loading } from '@/components/Loading';
import { useApi } from '@/hooks/useApi';
import { inputList } from '@/input';
import { isValidJSON } from '@/utils/isValidJSON';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

export default function Home() {
  const [payload, setPayload] = useState(JSON.stringify(inputList, null, 2));
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { getConvert } = useApi();

  const handleTest = async () => {
    if (!isValidJSON(payload)) {
      setError('Invalid JSON');
      return;
    }

    try {
      setLoading(true);
      const response = await getConvert(JSON.parse(payload));

      setOutput(JSON.stringify(response, null, 2));
      setError('');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col h-full p-8 gap-8">
      <div className="mx-auto flex flex-col">
        <Button onClick={handleTest} loading={loading}>
          Convert
        </Button>

        {error && <span className="text-red-300 ">Error: {error}</span>}
      </div>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-8 h-full relative">
        <Editor
          defaultLanguage="json"
          defaultValue={payload}
          theme="vs-dark"
          onChange={(value) => setPayload(value || '')}
        />
        <Editor
          defaultLanguage="json"
          value={error ? '' : output}
          theme="vs-dark"
          options={{ readOnly: true }}
        />
        {loading && <Loading />}
      </div>
    </main>
  );
}
