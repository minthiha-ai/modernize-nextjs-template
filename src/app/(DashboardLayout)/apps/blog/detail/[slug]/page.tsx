"use client"

import BlogDetail from "@/app/components/apps/blog/detail";
import PageContainer from '@/app/components/container/PageContainer';

const BlogPost = () => {
  return (
    <PageContainer title="Blog Detail" description="this is Blog Detail">

      <BlogDetail />
    </PageContainer>
  );
};

export default BlogPost;
