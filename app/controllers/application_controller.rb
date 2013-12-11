#encoding: utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_locale

  def index
  end

  def price_request
  end

  def price_request_post
    mail = Mail.new
    mail[:from] = "price_request@genshipcompany.com"
    mail[:subject] = "price_request"
    mail.text_part =  Mail::Part.new
    mail.text_part.body = form_text params
    mail["to"] = "gsc.service.bot@gmail.com"
    puts mail.deliver

    redirect_to :price_request, :notice => :success
  end

  def contact_post
    mail = Mail.new
    mail[:from] = "contact@genshipcompany.com"
    mail[:subject] = "contact"
    mail.text_part =  Mail::Part.new
    mail.text_part.body = form_text params
    mail["to"] = "gsc.service.bot@gmail.com"
    puts mail.deliver

    redirect_to :price_request, :notice => :success
  end

  def form_text params
    params.delete 'utf8'
    params.delete 'authenticity_token'
    params.delete 'commit'
    params.delete 'controller'
    params.delete 'action'
    body = params.map do |key, value|
      "#{key}: #{value}"
    end.join("\n\r")
    "Вам пришел запрос ставки!\n\r\n\r" + body
  end

  private

  def set_locale
    I18n.locale = params[:locale]
  end
end
