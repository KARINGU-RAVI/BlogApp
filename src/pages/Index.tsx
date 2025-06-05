
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, Search } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
  author: string;
}

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Getting Started with Modern Web Development',
        content: 'In this comprehensive guide, we explore the latest trends and technologies in web development. From React and TypeScript to modern deployment strategies, learn how to build scalable applications that users love. We\'ll cover best practices, performance optimization, and the tools that every developer should know about...',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        created_at: '2024-01-15',
        author: 'John Doe'
      },
      {
        id: '2',
        title: 'The Future of AI in Software Development',
        content: 'Artificial Intelligence is transforming how we write, test, and deploy code. Discover the latest AI tools that are revolutionizing the development process and learn how to integrate them into your workflow. From code generation to automated testing, AI is changing everything...',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
        created_at: '2024-01-12',
        author: 'Jane Smith'
      },
      {
        id: '3',
        title: 'Building Responsive Design Systems',
        content: 'Creating consistent, scalable design systems is crucial for modern applications. Learn how to build component libraries that work across platforms and teams. We\'ll explore design tokens, component architecture, and documentation strategies that make your design system a success...',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop',
        created_at: '2024-01-10',
        author: 'Mike Johnson'
      }
    ];
    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevBlog
              </h1>
              <span className="text-gray-500 text-sm">Insights & Tutorials</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-blue-600 font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link to="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Welcome to DevBlog
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
            Discover the latest insights, tutorials, and trends in web development. 
            From beginner tips to advanced techniques, we've got you covered.
          </p>
          <div className="max-w-md mx-auto animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h3>
          <p className="text-gray-600">Stay up to date with the latest developments in web technology</p>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {truncateContent(post.content, 150)}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">DevBlog</h4>
              <p className="text-gray-400">
                Your go-to source for web development insights and tutorials.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">React & TypeScript</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Backend Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DevBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
