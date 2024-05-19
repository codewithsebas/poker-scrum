"use client"
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface Url {
    url: string;
}

const CopyButton = ({ url }: Url) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);

        // Resetear el estado después de un tiempo para que el mensaje "copiado" desaparezca
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <button onClick={handleCopy}>
            {copied ? (
                <Check className="cursor-pointer" size={16} />
            ) : (
                <Copy className="cursor-pointer" size={16} />
            )}
        </button>
    );
};

export default CopyButton;
