# encoding: utf-8

Refinery::I18n.configure do |config|
  config.default_locale = :ru

  config.current_locale = :ru

  # config.default_frontend_locale = :en

  config.frontend_locales = [:ru, :en, :es, :"zh-CN"]

  config.locales = {:en=>"English", :ru=>"Русский", :es => "Spanish", :"zh-CN" => "Chinese"}
end
