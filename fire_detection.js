//
// 2019 - Antonio Carlon Paredes
// License: CC BY 4.0
// https://creativecommons.org/licenses/by/4.0/
//

let detect_mode = false;
let find_water_bodies = true;
let ndwi_hi = 0.2;

let water_color = [0, 1, 1];
let fire_color = [[0.5, 0, 0], [1, 0, 0], [1, 1, 0], [1, 1, 1]];
let fire_color_high_contrast = [1, 0, 1];
let fire_index_range = [1, 1.5, 3.5];
let ndwi_range = [0, 3.5];
let ndwi_color_range = [[0.8, 0.8, 1], [0.1, 0.3, 0.7]];

let fire_index = Math.pow(B12, 2) / B11;
let ndwi = (B03 - B08) / (B03 + B08);

if (detect_mode) {
  if (fire_index > 1)
    return fire_color_high_contrast;
  if (find_water_bodies && ndwi > ndwi_hi)
    return water_color;
  return [0, 0, 0];
}

if (fire_index > 0.75) 
  return colorBlend(fire_index, fire_index_range, fire_color);
else if (find_water_bodies && ndwi > ndwi_hi)
  return colorBlend(ndwi * 2.5, ndwi_range, ndwi_color_range);
else return [B04 * 2.5, B03 * 2.5, B02 * 2.5];
