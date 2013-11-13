# This migration comes from refinery_sliders (originally 1)
class CreateSlidersSliders < ActiveRecord::Migration

  def up
    create_table :refinery_sliders do |t|
      t.text :image
      t.string :headline
      t.string :title
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-sliders"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/sliders/sliders"})
    end

    drop_table :refinery_sliders

  end

end
