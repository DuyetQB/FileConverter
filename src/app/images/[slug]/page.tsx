import React from 'react';
import Layout from '../../components/layouts';
import { Metadata, ResolvingMetadata } from 'next';
import UploadFileImage from '@/app/components/forms/UploadFileImage';
import { imagesServiceBox } from '@/app/data/dataImagesService';
import { getStringSide } from '@/app/utils/string';


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugParams = params.slug

  const services = imagesServiceBox({
    fileFrom: getStringSide("left",params.slug),
    fileTo: getStringSide("right",params.slug)
  })

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: services.title || 'Convert Jpeg to Webp',
    description: services.description,
    openGraph: {
      images: [services.imageUrl, ...previousImages],
    },
    alternates: {
      canonical: `https://www.filesconvert.com/images/${slugParams}`,
    },
    icons: {
      icon: "/assets/icon.png"
    }
  }
}


const Page: React.FC = () => {

  return (
    <Layout>
      <UploadFileImage />
    </Layout>
  );
};

export default Page;
