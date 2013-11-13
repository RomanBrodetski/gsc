module Refinery
  module Sliders
    class Slider < Refinery::Core::BaseModel
      self.table_name = 'refinery_sliders'

      attr_accessible :image, :headline, :title, :position

      validates :image, :presence => true, :uniqueness => true
    end
  end
end
