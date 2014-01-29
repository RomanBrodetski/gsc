module Refinery
  module Sliders
    class Slider < Refinery::Core::BaseModel
      self.table_name = 'refinery_sliders'

      attr_accessible :image, :headline, :title, :position, :en_headline, :en_title, :es_headline, :es_title, :zh_headline, :zh_title

      validates :image, :presence => true, :uniqueness => true

      def localized_title locale
        locale = '' if locale == :ru || locale == nil
        return self.send("#{locale}_title")
      end

      def localized_headline locale
        locale = '' if locale == :ru || locale == nil
        return self.send("#{locale}_headline")
      end
    end
  end
end
