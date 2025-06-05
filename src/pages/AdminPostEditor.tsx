
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Eye, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
  status: 'published' | 'draft';
}

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEdit = Boolean(id && id !== 'new');

  const [post, setPost] = useState<BlogPost>({
    id: '',
    title: '',
    content: '',
    image: '',
    created_at: new Date().toISOString().split('T')[0],
    status: 'draft'
  });

  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isEdit) {
      // Mock loading existing post
      const mockPost: BlogPost = {
        id: id!,
        title: 'Getting Started with Modern Web Development',
        content: `# Getting Started with Modern Web Development

Welcome to the exciting world of modern web development! In this comprehensive guide, we'll explore the latest trends, tools, and technologies that are shaping the web development landscape in 2024.

## What You'll Learn

- Modern JavaScript frameworks and libraries
- Best practices for responsive design
- Performance optimization techniques
- Deployment strategies and DevOps

## Introduction

The web development ecosystem has evolved dramatically over the past few years. With the rise of frameworks like React, Vue, and Angular, developers now have powerful tools at their disposal to create rich, interactive user experiences.

### Key Technologies

1. **Frontend Frameworks**: React, Vue.js, Angular
2. **Build Tools**: Vite, Webpack, Parcel
3. **Styling**: Tailwind CSS, Styled Components, CSS Modules
4. **State Management**: Redux, Zustand, Context API

## Getting Started

To begin your journey in modern web development, you'll need to familiarize yourself with the following concepts:

- Component-based architecture
- State management patterns
- Modern JavaScript (ES6+)
- CSS preprocessors and frameworks
- Version control with Git

## Conclusion

Modern web development offers endless possibilities for creating amazing user experiences. By mastering these fundamental concepts and tools, you'll be well-equipped to build the next generation of web applications.

Happy coding!`,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        created_at: '2024-01-15',
        status: 'published'
      };
      setPost(mockPost);
    }
  }, [isEdit, id]);

  const handleSave = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    
    // Mock save operation
    setTimeout(() => {
      setIsSaving(false);
      setPost({ ...post, status });
      
      toast({
        title: status === 'published' ? 'Post Published!' : 'Draft Saved!',
        description: status === 'published' 
          ? 'Your post has been published successfully.' 
          : 'Your draft has been saved.',
      });

      if (status === 'published') {
        navigate('/admin');
      }
    }, 1000);
  };

  const handleImageUpload = () => {
    // Mock image upload
    const mockImageUrl = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop';
    setPost({ ...post, image: mockImageUrl });
    
    toast({
      title: 'Image Uploaded!',
      description: 'Your image has been uploaded successfully.',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEdit ? 'Edit Post' : 'New Post'}
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Label htmlFor="preview-mode" className="text-sm">Preview</Label>
                <Switch
                  id="preview-mode"
                  checked={isPreview}
                  onCheckedChange={setIsPreview}
                />
              </div>
              <Button
                variant="outline"
                onClick={() => handleSave('draft')}
                disabled={isSaving}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave('published')}
                disabled={isSaving}
              >
                <Eye className="w-4 h-4 mr-2" />
                {isSaving ? 'Publishing...' : 'Publish'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isPreview ? (
          /* Preview Mode */
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                )}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <p className="text-gray-500 mb-6">
                  Published on {new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>;
                  } else if (paragraph.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>;
                  }
                })}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Edit Mode */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={post.title}
                      onChange={(e) => setPost({ ...post, title: e.target.value })}
                      placeholder="Enter post title..."
                      className="text-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={post.content}
                      onChange={(e) => setPost({ ...post, content: e.target.value })}
                      placeholder="Write your post content here... (Markdown supported)"
                      className="min-h-[500px] font-mono"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Tip: Use Markdown syntax for formatting (# for headers, ** for bold, etc.)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      <Switch
                        id="status"
                        checked={post.status === 'published'}
                        onCheckedChange={(checked) => 
                          setPost({ ...post, status: checked ? 'published' : 'draft' })
                        }
                      />
                      <span className="text-sm text-gray-600">
                        {post.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="date">Publication Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={post.created_at}
                      onChange={(e) => setPost({ ...post, created_at: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                  {post.image ? (
                    <div className="relative">
                      <img
                        src={post.image}
                        alt="Featured"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setPost({ ...post, image: '' })}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 mb-2">Upload featured image</p>
                      <Button variant="outline" size="sm" onClick={handleImageUpload}>
                        Choose Image
                      </Button>
                    </div>
                  )}
                  
                  {!post.image && (
                    <div className="mt-4">
                      <Label htmlFor="image-url">Or enter image URL</Label>
                      <Input
                        id="image-url"
                        value={post.image}
                        onChange={(e) => setPost({ ...post, image: e.target.value })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SEO & Metadata</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Brief description of your post..."
                      className="h-20"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="web-development, react, tutorial"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPostEditor;
