class AddTranslationsToSliders < ActiveRecord::Migration
  def change
    add_column :refinery_sliders, :en_title,    :string
    add_column :refinery_sliders, :en_headline, :string
    add_column :refinery_sliders, :es_title,    :string
    add_column :refinery_sliders, :es_headline, :string
    add_column :refinery_sliders, :zh_title,    :string
    add_column :refinery_sliders, :zh_headline, :string

    Refinery::Sliders::Slider.all.each do |slider|
      slider.en_title = slider.title
      slider.es_title = slider.title
      slider.zh_title = slider.title

      slider.en_headline = slider.headline
      slider.es_headline = slider.headline
      slider.zh_headline = slider.headline

      slider.save
    end
  end
end

