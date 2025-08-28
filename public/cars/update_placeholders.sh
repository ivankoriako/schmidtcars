#!/bin/bash

# Функция для создания улучшенной заглушки
create_placeholder() {
    local name="$1"
    local year="$2"
    local engine="$3"
    local category="$4"
    
    cat > "$name.jpg" << SVG_EOF
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)"/>
  
  <!-- Иконка автомобиля -->
  <g transform="translate(200,120)" fill="white" opacity="0.3">
    <rect x="-25" y="-10" width="50" height="20" rx="3" fill="white"/>
    <circle cx="-15" cy="15" r="6" fill="white"/>
    <circle cx="15" cy="15" r="6" fill="white"/>
    <rect x="-20" y="-20" width="40" height="15" rx="2" fill="white"/>
  </g>
  
  <!-- Название автомобиля -->
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
    $name
  </text>
  
  <!-- Характеристики -->
  <text x="50%" y="70%" font-family="Arial, sans-serif" font-size="14" fill="#93c5fd" text-anchor="middle" dominant-baseline="middle">
    $year • $engine
  </text>
  
  <!-- Дополнительная информация -->
  <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="12" fill="#bfdbfe" text-anchor="middle" dominant-baseline="middle">
    $category
  </text>
  
  <!-- Декоративные элементы -->
  <circle cx="50" cy="50" r="3" fill="#fbbf24" opacity="0.8"/>
  <circle cx="350" cy="50" r="3" fill="#fbbf24" opacity="0.8"/>
  <circle cx="50" cy="250" r="3" fill="#fbbf24" opacity="0.8"/>
  <circle cx="350" cy="250" r="3" fill="#fbbf24" opacity="0.8"/>
</svg>
SVG_EOF
}

# Обновляем все заглушки
create_placeholder "Lexus LS 500" "2022" "3.5 V6 Hybrid" "Люкс седан" lexus-ls.jpg
create_placeholder "Lexus LX 600" "2023" "3.5 V6 Twin-Turbo" "Люкс внедорожник" lexus-lx.jpg
create_placeholder "BMW X7 xDrive" "2023" "3.0 TwinPower Turbo" "Премиум внедорожник" bmw-x7.jpg
create_placeholder "Mercedes-Benz GLS" "2022" "3.0 V6 Turbo" "Премиум внедорожник" mercedes-gls.jpg
create_placeholder "Toyota Land Cruiser 300" "2023" "3.5 V6 Twin-Turbo" "Бизнес внедорожник" land-cruiser.jpg
create_placeholder "Mercedes-Benz V-класс" "2023" "2.0 Turbo" "Премиум минивэн" mercedes-v.jpg
create_placeholder "Lexus LM 350" "2023" "3.5 V6" "Люкс минивэн" lexus-lm.jpg
create_placeholder "Toyota Alphard Executive" "2022" "3.5 V6" "Премиум минивэн" alphard.jpg

echo "Все заглушки обновлены!"
