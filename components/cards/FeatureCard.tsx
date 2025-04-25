import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

function FeatureCard({ title, icon, description }: FeatureCardProps) {
  const IconComponent = icon;

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md shadow-lg flex flex-col justify-center items-center hover:scale-105 transition duration-300">
      <div className="text-teal-400 mb-3">
        <IconComponent size={30} />
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}

export default FeatureCard;
