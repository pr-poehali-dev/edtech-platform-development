import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-edtech-light text-edtech-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 text-edtech-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Feature;
