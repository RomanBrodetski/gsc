module Refinery
  module Sliders
    class SlidersController < ::ApplicationController

      before_filter :find_all_sliders
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @slider in the line below:
        present(@page)
      end

      def show
        @slider = Slider.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @slider in the line below:
        present(@page)
      end

    protected

      def find_all_sliders
        @sliders = Slider.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/sliders").first
      end

    end
  end
end
