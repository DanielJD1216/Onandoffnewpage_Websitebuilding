import { FeatureCard } from '@/components/ui/feature-card';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BaseFeature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureItem extends BaseFeature {
  variant?: 'default' | 'benefit';
  className?: string;
}

interface StatisticItem {
  number: string;
  label: string;
  description: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

interface StatisticsGridProps {
  items: StatisticItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const gridColumns = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4'
};

export function FeatureGrid({ 
  items, 
  columns = 3, 
  className = '' 
}: FeatureGridProps) {
  return (
    <div className={cn(
      `grid gap-6 ${gridColumns[columns]} max-w-5xl mx-auto`,
      className
    )}>
      {items.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          variant={item.variant || 'default'}
          className={item.className}
        />
      ))}
    </div>
  );
}

export function StatisticsGrid({ 
  items, 
  columns = 4, 
  className = '' 
}: StatisticsGridProps) {
  return (
    <div className={cn(
      `grid gap-8 ${gridColumns[columns]} max-w-5xl mx-auto`,
      className
    )}>
      {items.map((stat, index) => (
        <Card key={index} className="p-6 border-0 shadow-lg text-center">
          <div className="text-4xl font-black text-brand-green mb-2">
            {stat.number}
          </div>
          <h3 className="text-lg font-black text-gray-800 mb-2">
            {stat.label}
          </h3>
          <p className="text-sm text-gray-600">
            {stat.description}
          </p>
        </Card>
      ))}
    </div>
  );
}

// Convenience component for simple icon-title-description grids
interface SimpleGridItem {
  icon: string;
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface SimpleGridProps {
  items: SimpleGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function SimpleGrid({ 
  items, 
  columns = 3, 
  className = '' 
}: SimpleGridProps) {
  return (
    <div className={cn(
      `grid gap-6 ${gridColumns[columns]} max-w-5xl mx-auto`,
      className
    )}>
      {items.map((item, index) => (
        <Card key={index} className="p-6 border-0 shadow-lg text-center">
          <span className="text-3xl mb-3 block">{item.icon}</span>
          <h3 className="text-lg font-black text-brand-green mb-3">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm mb-3">
            {item.description}
          </p>
          {item.content && (
            <div>{item.content}</div>
          )}
        </Card>
      ))}
    </div>
  );
}