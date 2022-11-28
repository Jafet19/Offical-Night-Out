# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Category.destroy_all
Option.destroy_all



puts "Placing categories"
c1 = Category.create(event: "Simple")
c2 = Category.create(event: "Adventure")

puts "Placing Options-Affordable"
o1 = Option.create!(name: "Speedy's Fast Track",location: "11440 Hempstead Rd, Houston, TX 77092", url: "http://www.houstonfasttrack.com", category_id: c1.id)
o2 = Option.create!(name: "AR's Entertainment Hub",location: "4533 Garth Rd, Baytown, TX 77521", url: "https://www.arsentertainmenthub-sanantonio.com", category_id: c1.id)
o3 = Option.create!(name: "Palace Social",location: "4191 Bellaire Blvd Suite 150, Houston, TX 77025", url: "https://www.palacesocial.com", category_id: c1.id)
o4 = Option.create!(name: "Houston Zoo",location: "6200 Hermann Park Dr, Houston, TX 77030", url: "https://www.houstonzoo.org", category_id: c1.id)
o5 = Option.create!(name: "Ikea",location: "7810 Katy Fwy, Houston, TX 77024", url: "https://www.ikea.com/us/en/stores/houston/", category_id: c1.id)
o6 = Option.create!(name: "The Museum of Fine Arts, Houston",location: "1001 Bissonnet St, Houston, TX 77005", url: "https://www.mfah.org", category_id: c1.id)
o7 = Option.create!(name: "K1 Speed",location: "14900 Northwest Fwy, Houston, TX 77040", url: 'https://www.k1speed.com/houston-location.html', category_id: c1.id)
o8 = Option.create!(name: "Project Panic Escape Rooms - Houston",location: "3510 Main St suite c, Houston, TX 77002", url: 'https://projectpanicescaperooms.com/houston/', category_id: c1.id)
o9 = Option.create!(name: "Houston Improv Comedy Club",location: "7620 Katy Fwy #455, Houston, TX 77024", url: "", category_id: c2.id)

puts "Placing Option-Adventure"
o10 = Option.create!(name: "Buffalo Bayou Park",location: "1800 Allen Pkwy. and Memorial Dr., River Oaks", url: "https://buffalobayou.org/visit/destination/buffalo-bayou-park/", category_id: c2.id)
o11 = Option.create!(name: "Stereo Live",location: "6400 Richmond Ave., Houston, TX 77057", url: "https://stereolive.com", category_id: c2.id)
o12 = Option.create!(name: "North Beach",location: "3200 E Surfside Blvd, Corpus Christi, TX", url: "null", category_id: c2.id)
o13 = Option.create!(name: "Discovery Green",location: "1500 McKinney St, Houston, TX 77010", url: "https://www.discoverygreen.com", category_id: c2.id)
o14 = Option.create!(name: "Lake Conroe",location: "14968 Hwy 105 West, Montgomery, Texas 77356", url: "https://www.lakeconroe.com", category_id: c2.id)


# puts "Created #{Option.count} options"
puts "Created #{Category.count} options"
