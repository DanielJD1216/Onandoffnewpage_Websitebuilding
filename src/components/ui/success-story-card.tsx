import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Quote, Calendar, MapPin, GraduationCap, Target, Sparkles } from 'lucide-react';

interface SuccessStoryCardProps {
  story: {
    id: number;
    studentGrade: string;
    destination: string;
    year: string;
    challenge: string;
    solution: string;
    result: string;
    quote: string;
    icon: string;
  };
  variant?: 'default' | 'premium' | 'compact';
  className?: string;
}

// Map emoji icons to Lucide components for consistency
const iconMap: { [key: string]: any } = {
  '🎓': GraduationCap,
  '🌟': Sparkles,
  '🚀': Target,
  '👨‍👩‍👧‍👦': Target,
  '🎵': Target,
  '💪': Target,
};

export function SuccessStoryCard({ 
  story, 
  variant = 'default',
  className = ''
}: SuccessStoryCardProps) {
  const IconComponent = iconMap[story.icon] || Target;

  const cardStyles = {
    default: 'bg-gradient-to-br from-white to-brand-ivory/10 border border-brand-green/15',
    premium: 'bg-gradient-to-br from-white via-brand-ivory/20 to-brand-green/5 border border-brand-green/20',
    compact: 'bg-white border border-gray-200'
  };

  return (
    <Card className={cn(
      'border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden relative',
      cardStyles[variant],
      className
    )}>
      {/* Korean-style decorative elements */}
      {variant === 'premium' && (
        <>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full transform translate-x-10 -translate-y-10" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-full transform -translate-x-8 translate-y-8" />
        </>
      )}

      <div className="p-8 relative">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Student Info Section */}
          <div className="lg:w-1/3">
            <div className="text-center p-6 bg-gradient-to-br from-brand-green/5 to-brand-green/10 rounded-2xl relative">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/25">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              
              {/* Student Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center gap-2 text-brand-green font-black">
                  <GraduationCap className="w-4 h-4" />
                  <span>{story.studentGrade}</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>{story.destination}</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{story.year}</span>
                </div>
              </div>

              {/* Korean accent dot */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-gold rounded-full" />
            </div>
          </div>
          
          {/* Story Content */}
          <div className="lg:w-2/3 space-y-6">
            {/* Challenge, Solution, Result Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-5 rounded-xl border border-red-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-red-200/30 to-transparent rounded-full transform translate-x-2 -translate-y-2" />
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <h3 className="font-black text-red-800 text-sm">도전 상황</h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">{story.challenge}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-5 rounded-xl border border-blue-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full transform translate-x-2 -translate-y-2" />
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">💡</span>
                  </div>
                  <h3 className="font-black text-blue-800 text-sm">해결 방안</h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">{story.solution}</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-5 rounded-xl border border-green-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-green-200/30 to-transparent rounded-full transform translate-x-2 -translate-y-2" />
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="font-black text-green-800 text-sm">성과</h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">{story.result}</p>
              </div>
            </div>
            
            {/* Student Quote */}
            <div className="bg-gradient-to-r from-brand-ivory/40 to-brand-green/10 p-6 rounded-2xl border-l-4 border-brand-green relative overflow-hidden">
              {/* Korean-style decorative elements */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full transform translate-x-4 -translate-y-4" />
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-green to-brand-green/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 italic mb-3 leading-relaxed font-medium">
                    {story.quote}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-0.5 bg-brand-green/40" />
                    <p className="text-sm font-black text-brand-green">익명의 학생</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}