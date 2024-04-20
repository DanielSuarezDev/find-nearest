import { FC } from 'react';

export const Divider:FC<{
text?: string;
}> = ({ text }) => {
return (
<div className="flex flex-row items-center justify-center my-4">
<div className="flex-1 h-0.5 bg-gray-300"></div>
{text && <p className="mx-4 text-sm font-medium text-gray-400">{text}</p>}
<div className="flex-1 h-0.5 bg-gray-300"></div>
</div>
);
};
