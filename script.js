document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown-filter");

  dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([21.0285, 105.8542], 13); // Hà Nội
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  const locations = [
    {
      name: "An cafe & Tea",
      lat: 21.0719,
      lng: 105.7727,
      address: "38 P. Viên, Cổ Nhuế, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 3.2,
      phone: "0912424683",
      hours: "6:00  - 24:00 ",
      type: "Cafe hiện đại",
	  price: "40000"
    },
    {
      name: "JINGO-tiệm trà và cafe",
      lat: 21.0716,
      lng: 105.7702,
      address: "326, Đ. Bờ Tây Sông Nhuệ/18 Tổ 5, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 5.0,
      phone: "0988723792",
      hours: "8:00  - 23:00 ",
      type: "Cafe cổ điển",
	  price: "50000"
    },
    {
      name: "Tháng 6 Cafe",
      lat: 21.0736,
      lng: 105.7750,
      address: "20 Ng. 59 P. Lê Văn Hiến, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 4.5,
      phone: "0941050772",
      hours: "7:00  - 22:00 ",
      type: "Cafe hiện đại",
	  price: "100000"
    },
    {
      name: "Càfê NHÀ KÊ",
      lat: 21.0742,
      lng: 105.7734,
      address: "1 Ng. 85 P. Lê Văn Hiến, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 4,
      phone: "0984043606",
      hours: "7:00  - 23:00 ",
      type: "Cafe cổ điển",
	  price: "60000"
    },
    {
      name: "Tiệm cafe Cô chủ nhỏ ",
      lat: 21.0743,
      lng: 105.7739,
      address: "56 P. Lê Văn Hiến, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 4,
      phone: "0911843121",
      hours: "7:00  - 21:00 ",
      type: "Cafe cổ điển",
	  price: "150000"
    },
    {
      name: "The Light Coffee",
      lat: 21.0748,
      lng: 105.7751,
      address: "3QFF+RHQ, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 4,
      phone: "0943685665",
      hours: "7:00  - 22:00 ",
      type: "Cafe hiện đại",
	  price: "55000"
    },
    {
      name: "Táo Coffe & Tea",
      lat: 21.0785,
      lng: 105.7741,
      address: "155 Ngõ 58 Phố Lê Văn Hiến, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 5,
      phone: "0969743097",
      hours: "7:00  - 18:00 ",
      type: "Cafe hiện đại",
	  price: "80000"
    },
    {
      name: "Haawa Cafe",
      lat: 21.0809,
      lng: 105.7779,
      address: "Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 4.8,
      phone: "0326196666",
      hours: "7:00 AM - 23:00 PM",
      type: "Cafe cổ điển",
	  price: "110000"
    },
    {
      name: "MEOW COFFEE",
      lat: 21.0523,
      lng: 105.8020,
      address: "369 Đ. Xuân Đỉnh, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 5,
      phone: "0353121919",
      hours: "7:00  - 22:00 ",
      type: "Cafe thú cưng",
	  price: "55000"
    },
    {
      name: "Tiệm Cà Phê Mèo JennyMiaw",
      lat: 21.0842,
      lng: 105.7716,
      address: "111 Tân Nhuệ, Thuỵ Phương, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 5,
      phone: "0977055762",
      hours: "7:00  - 21:00 ",
      type: "Cafe thú cưng",
	  price: "75000"
    },
	{
      name: "Quán Kẻ Cót",
      lat: 21.0843,
      lng: 105.777,
      address: "24 Đ.Thụy Phương, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 5,
      phone: "0903212487",
      hours: "7:00  - 21:00 ",
      type: "Cafe cổ điển",
	  price: "95000"
    },
	{
      name: "Tiệm cà phê Hiên Nhà",
      lat: 21.0709,
      lng: 105.7955,
      address: "1 Ng. 205 Đ. Xuân Đỉnh, Xuân Đỉnh, Tây Hồ, Hà Nội, Việt Nam",
      rating: 5,
      phone: "0966988090",
      hours: "7:00  - 23:00 ",
      type: "Cafe cổ điển",
	  price: "100000"
    },
	{
      name: "Visun Cafe",
      lat: 21.0814,
      lng: 105.7854,
      address: "66 Đ. Tân Xuân, Xuân Đỉnh, Bắc Từ Liêm, Hà Nội, Việt Nam",
      rating: 5,
      phone: "0984435708",
      hours: "7:00  - 20:00 ",
      type: "Cafe hiện đại",
	  price: "88000"
    },
	{
      name: "Lava cafe",
      lat: 21.0608,
      lng: 105.7838,
      address: "427 Đ. Phạm Văn Đồng, Cổ Nhuế, Bắc Từ Liêm, Hà Nội 10000, Việt Nam",
      rating: 4.5,
      phone: "0800947342",
      hours: "10:00  - 24:00 ",
      type: "Cafe hiện đại",
	  price: "150000"
    },
	{
      name: "XLe Parc Cafe",
      lat: 21.0449,
      lng: 105.7620,
      address: "số 7 Ngách 259/57, Đ. Phú Diễn, Cầu Diễn, Bắc Từ Liêm, Hà Nội 100000, Việt Nam",
      rating: 4,
      phone: "0977830065",
      hours: "7:00  - 19:00 ",
      type: "Cafe hiện đại",
	  price: "100000"
    },
	{
      name: "Cafe Hội An 2",
      lat: 21.0751,
      lng: 105.7739,
      address: "ngõ 59/14 P. Lê Văn Hiến, Đông Ngạc, Bắc Từ Liêm, Hà Nội 11910, Việt Nam",
      rating: 5,
      phone: "0899101989",
      hours: "8:00  - 20:00 ",
      type: "Cafe cổ điển",
	  price: "400000"
    },
  ];

  let userPosition = null; // Lưu vị trí người dùng
  let routeLine = null; // Để lưu trữ đường đi vẽ trên bản đồ
  const locationList = document.getElementById("location-list");

  // Hiển thị tất cả các marker
  const markers = locations.map((location) => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    
	// Thêm tooltip hiển thị tên địa điểm
  marker.bindTooltip(location.name, {
    permanent: true, // Hiển thị cố định
    direction: "top", // Vị trí trên marker
    offset: [0, -10], // Dịch tooltip lên trên marker
  });
	
    // Thêm thông tin chi tiết vào pop-up
    marker.bindPopup(`
      <b>${location.name}</b><br>
         ${location.address}<br>
      ⭐ ${location.rating} <br>
      📞 ${location.phone}<br>
      ⏰ Giờ hoạt động: ${location.hours}<br>
      ☕ Loại quán: ${location.type}<br>
	    💵 Đơn giá: ${location.price} VNĐ<br>
      <button class="route-button" onclick="getRoute(${location.lat}, ${location.lng})"> 📍 Chỉ đường </button>
    `);
    
    return marker;
  });

  // Hiển thị danh sách địa điểm
  function updateLocationList(filteredLocations) {
    locationList.innerHTML = "";
    filteredLocations.forEach((location) => {
      const originalIndex = locations.indexOf(location); // Lấy chỉ mục thực sự từ mảng gốc
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${location.name}</strong><br>
        ${location.address}<br>
		<strong><span style="color: green;">Giá: ${location.price} VNĐ</span></strong><br>
        ☕${location.type}<br>
        ⭐ ${location.rating}
        <button onclick="focusMap(${originalIndex})">Xem trên bản đồ</button>
      `;
      locationList.appendChild(li);
    });
  }
  
  updateLocationList(locations);

  // Lọc địa điểm
  document.getElementById("filter-btn").addEventListener("click", () => {
  const highRatingChecked = document.getElementById("high-rating").checked;
  const nearbyChecked = document.getElementById("nearby").checked;
  const isOpenChecked = document.getElementById("is-open-now").checked;
  const priceFilter = document.getElementById("price-select").value;
  const typeFilter = document.getElementById("type-select").value;

  let filteredLocations = locations.filter((loc) => {
    let matches = true;

    // Điều kiện: Đánh giá cao
    if (highRatingChecked && loc.rating < 4.5) {
      matches = false;
    }

    // Điều kiện: Gần bạn
    if (
      nearbyChecked &&
      userPosition &&
      getDistance(userPosition.lat, userPosition.lng, loc.lat, loc.lng) > 2
    ) {
      matches = false;
    }
  // Điều kiện mở cửa
    if (isOpenChecked && loc.hours) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const [openStr, closeStr] = loc.hours.split("-");
      const [openH, openM] = openStr.split(":").map(Number);
      const [closeH, closeM] = closeStr.split(":").map(Number);
      const openMinutes = openH * 60 + openM;
      const closeMinutes = closeH * 60 + closeM;
      console.log(now);
      if (currentMinutes < openMinutes || currentMinutes > closeMinutes) {
        matches = false;
      }
    }

// Điều kiện thể loại
switch (typeFilter) {
  case "Cafe cổ điển":
    matches = matches && loc.type !== "Cafe hiện đại" && loc.type !== "Cafe thú cưng";
    break;
  case "Cafe hiện đại":
    matches = matches && loc.type !== "Cafe cổ điển" && loc.type !== "Cafe thú cưng";
    break;
  case "Cafe thú cưng":
    matches = matches && loc.type !== "Cafe cổ điển" && loc.type !== "Cafe hiện đại";
    break;
}

// Điều kiện: Giá cả
switch (priceFilter) {
  case "over150":
    matches = matches && loc.price > 150000;
    break;
  case "range-0-50":
    matches = matches && loc.price >= 0 && loc.price <= 50000;
    break;
  case "range-50-100":
    matches = matches && loc.price >= 50000 && loc.price <= 100000;
    break;
  case "range-100-150":
    matches = matches && loc.price >= 100000 && loc.price <= 150000;
    break;
}

return matches;
});
// Sorting based on price after initial filtering
  if (priceFilter === "low-high") {
    filteredLocations.sort((a, b) => a.price - b.price);
  } else if (priceFilter === "high-low") {
    filteredLocations.sort((a, b) => b.price - a.price);
  }
  console.log("Filtered Locations:", filteredLocations);
  // Hiển thị các địa điểm đã lọc (ví dụ: cập nhật giao diện UI)


    // Cập nhật danh sách và ẩn marker không cần thiết
    updateLocationList(filteredLocations);
    markers.forEach((marker, index) => {
	const location = locations[index];
	// Kiểm tra xem địa điểm này có nằm trong kết quả lọc hay không
	if (filteredLocations.includes(location)) {
    marker.setOpacity(1); // Hiện marker
	marker.getTooltip().setOpacity(1); //Hiện tooltip
	} else {
    marker.setOpacity(0); // Ẩn marker (không cần xóa khỏi bản đồ)
	marker.getTooltip().setOpacity(0); // Ẩn tooltip
	}	
	});

  });

  // Lấy vị trí người dùng
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        L.marker([userPosition.lat, userPosition.lng], {
          icon: L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            iconSize: [45, 45],
          }),
        })
      
          .addTo(map)
          .bindPopup('<div style="font-weight: bold; font-size: 17px; color: #333;">Bạn đang ở đây!</div>')
          .openPopup();
        map.setView([userPosition.lat, userPosition.lng], 17);
        if (nearbyRepairPoints.length > 0) {
          nearbyRepairPoints.forEach(async point => {
              // Lấy địa chỉ từ Nominatim
              const address = await getAddressFromCoordinates(point.lat, point.lng);

              // Đánh dấu từng điểm sửa xe với địa chỉ từ OpenStreetMap
              L.marker([point.lat, point.lng]).addTo(map)
                  .bindPopup(`<b>${point.name}</b><br>Địa chỉ: ${address}<br><button onclick="getRoute(${userLat}, ${userLng}, ${point.lat}, ${point.lng})">Tìm đường</button>`);
          });

          // Phóng to để hiển thị cả vị trí người dùng và các điểm sửa xe gần nhất
          map.setView([userLat, userLng], 14);
      } else {
          alert("Không tìm thấy điểm sửa xe nào trong bán kính 10km.");
      }
      },
      (error) => {
        console.error("Lỗi định vị: ", error.message);
      }
    );
  } else {
    alert("Trình duyệt không hỗ trợ định vị GPS.");
  }

	 // Hàm lấy tuyến đường từ OSRM API
	  async function drawRoute(userLat, userLng, destLat, destLng) {
		const url = `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${destLng},${destLat}?overview=full&geometries=geojson&steps=true`;

		try {
		  const response = await fetch(url);
		  const data = await response.json();

		  if (data.routes && data.routes.length > 0) {
			const route = data.routes[0].geometry.coordinates;
			const latLngs = route.map(coord => [coord[1], coord[0]]);

			// Xóa đường cũ nếu có
			if (routeLine) {
			  map.removeLayer(routeLine);
			}

			// Vẽ đường đi mới
			routeLine = L.polyline(latLngs, { 
			 color: 'blue',          // Màu xanh dương
			weight: 7,              // Độ dày của đường
			opacity: 0.6,           // Độ mờ (0.6 là 60% hiển thị)
			lineJoin: 'round',      // Các góc tròn mềm mại
			lineCap: 'round',       // Đầu và đuôi đường tròn đẹp 
			
			
			}).addTo(map);
			
			
			map.fitBounds(routeLine.getBounds());
			
			// Tính khoảng cách giữa hai điểm
			const distance = getDistance(userLat, userLng, destLat, destLng).toFixed(2); // khoảng cách tính được (km)

			// Hiển thị khoảng cách trong popup của tuyến đường
			routeLine.bindPopup(`<b>Khoảng cách: ${distance} km</b>`).openPopup();
		  } else {
			alert("Không tìm thấy đường đi.");
		  }
		} catch (error) {
		  console.error("Lỗi khi vẽ đường:", error);
		  alert("Đã xảy ra lỗi khi lấy dữ liệu tuyến đường.");
		}
		map.on('click', () => {
		  if (routeLine) {
			map.removeLayer(routeLine); // xóa chỉ đường khi ấn vào bản đồ
			routeLine = null;
		}
		});

	  }
  
  // Hàm tập trung bản đồ vào vị trí
  window.focusMap = (index) => {
    const location = locations[index];
    map.setView([location.lat, location.lng], 15);
    markers[index].openPopup();
  };

  // Tính khoảng cách giữa hai điểm (Haversine Formula)
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Khoảng cách (km)
  }
  // Chỉ đường từ vị trí người dùng
  window.getRoute = (lat, lng) => {
    if (!userPosition) {
      alert("Vui lòng cho phép truy cập vị trí của bạn để sử dụng tính năng chỉ đường.");
      return;
    }
    drawRoute(userPosition.lat, userPosition.lng, lat, lng);
  };

  // Xóa tuyến đường hiện tại (nếu cần)
  window.clearRoute = () => {
    if (routeLine) {
      map.removeLayer(routeLine);
      routeLine = null;
    }
  };
});