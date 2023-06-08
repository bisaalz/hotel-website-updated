import NextImage from 'next/image';

export default function Image({ ...rest }) {
  return <NextImage width="300" height="200" alt="Hostel image" {...rest} />;
}
