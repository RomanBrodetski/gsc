module Refinery
  module Sliders
    module Admin
      class SlidersController < ::Refinery::AdminController

        crudify :'refinery/sliders/slider',
                :title_attribute => 'image',
                :xhr_paging => true

      end
    end
  end
end
