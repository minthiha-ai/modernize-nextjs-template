"use client"

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import BlogListing from '@/app/components/apps/blog/BlogListing';

const Blog = () => {
  return (
    <PageContainer title="Blog" description="this is Blog">
      <Breadcrumb title="Blog app" subtitle="Get the latest news" />
      {/* ------------------------------------------- */}
      {/* Blog Listing */}
      {/* ------------------------------------------- */}
      <BlogListing />
    </PageContainer>
  );
};

export default Blog;
