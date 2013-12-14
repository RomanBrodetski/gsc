# encoding: utf-8

Refinery::I18n.configure do |config|

  config.locales = {:ru=>"Русский", :en=>"English", :es => "Spanish", :zh => "Chinese"}
  config.default_locale = :ru

  config.current_locale = :ru

  config.default_frontend_locale = :ru

  config.frontend_locales = [:ru, :en, :es, :zh]
end
