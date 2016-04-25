# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, presence: true
  validates :lat, :lng, :seating, numericality: true

  def self.in_bounds(bounds)
    lng_range = (bounds["southWest"]["lng"]..bounds["northEast"]["lng"])
    lat_range = (bounds["southWest"]["lat"]..bounds["northEast"]["lat"])

    Bench.where(lng: lng_range, lat: lat_range)
  end
end
