
FactoryGirl.define do
  factory :slider, :class => Refinery::Sliders::Slider do
    sequence(:headline) { |n| "refinery#{n}" }
  end
end

