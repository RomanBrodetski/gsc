class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_locale

  def index
  end

  def price_request
  end

  def price_request_post

  end

  private

  def set_locale
    I18n.locale = params[:locale]
  end
end
