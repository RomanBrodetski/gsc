module Refinery
  module Sliders
    class Engine < Rails::Engine
      extend Refinery::Engine
      isolate_namespace Refinery::Sliders

      engine_name :refinery_sliders

      initializer "register refinerycms_sliders plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "sliders"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.sliders_admin_sliders_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/sliders/slider',
            :title => 'headline'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Sliders)
      end
    end
  end
end
