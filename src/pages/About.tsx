
import { Users, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
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
              <span className="text-gray-500 text-sm">About Us</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/about" className="text-blue-600 font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Admin
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            About DevBlog
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            We're passionate developers sharing knowledge, insights, and the latest trends 
            in web development to help you build better applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To empower developers with practical knowledge, cutting-edge insights, 
                and comprehensive tutorials that accelerate learning and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A vibrant community of developers, designers, and tech enthusiasts 
                sharing experiences and building the future of web development together.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Quality content, continuous learning, open collaboration, and making 
                complex technologies accessible to developers at every skill level.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h3>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              DevBlog was born from a simple idea: make web development knowledge more accessible 
              and practical for everyone. Founded by a team of passionate developers, we started 
              this platform to bridge the gap between complex technical concepts and real-world application.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Over the years, we've grown from a small blog to a comprehensive resource hub, 
              covering everything from basic HTML/CSS to advanced React patterns, backend architectures, 
              and modern deployment strategies. Our content is written by experienced developers 
              who understand the challenges of building production-ready applications.
            </p>
            <p className="text-lg text-gray-700">
              We believe that great software is built by great developers, and great developers 
              are made through continuous learning, practice, and community support. That's why 
              every article we publish is crafted with care, tested in real projects, and designed 
              to provide immediate value to your development journey.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h3>
          <p className="text-gray-600 mb-6">
            Explore our latest articles and join thousands of developers improving their skills.
          </p>
          <a 
            href="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Browse Articles
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">DevBlog</h4>
            <p className="text-gray-400 mb-4">
              Your go-to source for web development insights and tutorials.
            </p>
            <p className="text-gray-500">&copy; 2024 DevBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
