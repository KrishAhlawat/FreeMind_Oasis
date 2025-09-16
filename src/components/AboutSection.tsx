export default function AboutSection() {
  const stats = [
    { number: "10,000+", label: "Students Supported" },
    { number: "24/7", label: "AI Support Available" },
    { number: "95%", label: "User Satisfaction" },
    { number: "500+", label: "Mental Health Resources" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      university: "University of California",
      text: "FreeMind Oasis helped me recognize my stress patterns and provided tools to manage them effectively. The AI chat support is incredibly helpful during late-night study sessions.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez", 
      university: "MIT",
      text: "The self-assessment tools helped me understand my mental health better. Being able to track my emotions over time has been invaluable for my personal growth.",
      avatar: "MR"
    },
    {
      name: "Priya Patel",
      university: "Stanford University", 
      text: "Having access to professional resources through the platform made seeking help so much easier. The privacy and security features gave me confidence to be open about my struggles.",
      avatar: "PP"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Students Nationwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join thousands of students who have already taken control of their mental wellbeing 
            with our comprehensive support platform.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe that every student deserves access to quality mental health support. 
              FreeMind Oasis was created to bridge the gap between students and mental health resources, 
              using technology to make support more accessible, immediate, and personalized.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Privacy First</h4>
                <p className="text-sm text-gray-600">Your mental health data is secure and confidential</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Instant Support</h4>
                <p className="text-sm text-gray-600">Get help when you need it, 24/7 availability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Evidence-Based</h4>
                <p className="text-sm text-gray-600">Tools and resources backed by research</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Students Are Saying
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from students who have transformed their mental wellbeing journey with FreeMind Oasis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.university}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}