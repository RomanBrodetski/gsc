#encoding: utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery
  MAIL_TO_SALES = "sales@genshipcompany.com" #"roman.brodetski@gmail.com
  MAIL_TO_OFFICE = "office@genshipcompany.com"

  before_filter :set_locale

  def index
  end


  def index_test
  end

  def price_request
  end

  def price_request_post
    mail = Mail.new
    mail[:from] = "price_request@genshipcompany.com"
    mail[:subject] = "price_request"
    mail.text_part =  Mail::Part.new
    mail.text_part.body = form_price_request params
    mail["to"] = MAIL_TO_SALES
    puts mail.deliver

    redirect_to :price_request, :notice => :success
  end

  def contact_post
    mail = Mail.new
    mail[:from] = "contact@genshipcompany.com"
    mail[:subject] = "contact"
    mail.text_part =  Mail::Part.new
    mail.text_part.body = form_text params
    mail["to"] = MAIL_TO_OFFICE
    puts mail.deliver

    redirect_to "/contacts"
  end

  def form_price_request params
    res = "Вам пришел запрос ставки! \n\r\
Контактное лицо: #{params[:contact_person]} \n\r\
Email: #{params[:email]} \n\r\
Телефон: #{params[:phone]} \n\r\n\r\
Требуемые сервисы:\n\r"
    res << "Морская контейнерная перевозка \n\r" if params[:by_sea]
    res << "Таможенное оформление \n\r" if params[:custom]
    res << "Автомобильная или ж/д перевозка \n\r" if params[:by_car_or_train]
    res << "Терминальные и складские операции \n\r" if params[:storage]
    res << "Перевозка негабаритных и проектных грузов \n\r" if params[:oversize]
    res << "\n\rПункт отправления: #{params[:departure]} \n\r\
Пункт назначения: #{params[:destination]} \n\r\
Тип контейнера: #{params[:type]} \n\r\
Груз: #{params[:cargo]} \n\r\
Дополнительно :#{params[:extra]} \n\r\
Код ТНВЭД: #{params[:tnved]} \n\r\
Вес груза: #{params[:weight]}"
    res
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
