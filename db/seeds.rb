# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

50.times do
  lat = Random.new().rand(37.7..37.8)
  lng = Random.new().rand(122.4..122.5) * -1
  des = Faker::Lorem.word
  seating = rand(1..6)

  Bench.create(description: des, lat: lat, lng: lng, seating: seating)
end
