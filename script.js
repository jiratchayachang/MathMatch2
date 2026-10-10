const profiles = [
  {
    id: 1,
    name: "ต้น",
    gender: "ชาย",
    age: 21,
    interestedGender: "หญิง",
    minAge: 18,
    maxAge: 27,
    goal: "คบหาดูใจ",
    lifestyle: { social: 4, travel: 4, exercise: 3, nightlife: 2, spending: 4 }
  },
  {
    id: 2,
    name: "วิน",
    gender: "ชาย",
    age: 22,
    interestedGender: "หญิง",
    minAge: 18,
    maxAge: 28,
    goal: "คบหาดูใจ",
    lifestyle: { social: 4, travel: 5, exercise: 3, nightlife: 3, spending: 4 }
  },
  {
    id: 3,
    name: "บอส",
    gender: "ชาย",
    age: 20,
    interestedGender: "หญิง",
    minAge: 18,
    maxAge: 25,
    goal: "คบหาดูใจ",
    lifestyle: { social: 3, travel: 4, exercise: 3, nightlife: 2, spending: 3 }
  },
  {
    id: 4,
    name: "นนท์",
    gender: "ชาย",
    age: 20,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 26,
    goal: "เพื่อนใหม่",
    lifestyle: { social: 5, travel: 3, exercise: 2, nightlife: 4, spending: 3 }
  },
  {
    id: 5,
    name: "กันต์",
    gender: "ชาย",
    age: 22,
    interestedGender: "หญิง",
    minAge: 18,
    maxAge: 27,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 3, travel: 5, exercise: 4, nightlife: 3, spending: 3 }
  },
  {
    id: 6,
    name: "เจ",
    gender: "ชาย",
    age: 24,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 30,
    goal: "คบหาดูใจ",
    lifestyle: { social: 3, travel: 3, exercise: 5, nightlife: 1, spending: 2 }
  },
  {
    id: 7,
    name: "ภพ",
    gender: "ชาย",
    age: 23,
    interestedGender: "หญิง",
    minAge: 18,
    maxAge: 29,
    goal: "คบหาดูใจ",
    lifestyle: { social: 2, travel: 2, exercise: 5, nightlife: 1, spending: 2 }
  },
  {
    id: 8,
    name: "มาร์ค",
    gender: "ชาย",
    age: 19,
    interestedGender: "หญิง",
    minAge: 18,
    maxAge: 24,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 5, travel: 5, exercise: 2, nightlife: 4, spending: 5 }
  },
  {
    id: 9,
    name: "กอล์ฟ",
    gender: "ชาย",
    age: 25,
    interestedGender: "หญิง",
    minAge: 20,
    maxAge: 31,
    goal: "เพื่อนใหม่",
    lifestyle: { social: 2, travel: 3, exercise: 4, nightlife: 2, spending: 2 }
  },
  {
    id: 10,
    name: "เรย์",
    gender: "ชาย",
    age: 21,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 27,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 4, travel: 2, exercise: 3, nightlife: 5, spending: 4 }
  },
  {
    id: 11,
    name: "มินท์",
    gender: "หญิง",
    age: 20,
    interestedGender: "ชาย",
    minAge: 18,
    maxAge: 27,
    goal: "คบหาดูใจ",
    lifestyle: { social: 4, travel: 5, exercise: 3, nightlife: 2, spending: 4 }
  },
  {
    id: 12,
    name: "ฟ้า",
    gender: "หญิง",
    age: 19,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 25,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 2, travel: 3, exercise: 4, nightlife: 1, spending: 2 }
  },
  {
    id: 13,
    name: "พิม",
    gender: "หญิง",
    age: 21,
    interestedGender: "ชาย",
    minAge: 18,
    maxAge: 28,
    goal: "เพื่อนใหม่",
    lifestyle: { social: 5, travel: 4, exercise: 2, nightlife: 4, spending: 4 }
  },
  {
    id: 14,
    name: "พลอย",
    gender: "หญิง",
    age: 23,
    interestedGender: "ชาย",
    minAge: 20,
    maxAge: 30,
    goal: "คบหาดูใจ",
    lifestyle: { social: 3, travel: 2, exercise: 5, nightlife: 1, spending: 2 }
  },
  {
    id: 15,
    name: "มีนา",
    gender: "หญิง",
    age: 22,
    interestedGender: "ชาย",
    minAge: 18,
    maxAge: 29,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 3, travel: 4, exercise: 3, nightlife: 2, spending: 3 }
  },
  {
    id: 16,
    name: "แพรว",
    gender: "หญิง",
    age: 24,
    interestedGender: "ชาย",
    minAge: 20,
    maxAge: 31,
    goal: "เพื่อนใหม่",
    lifestyle: { social: 2, travel: 2, exercise: 4, nightlife: 1, spending: 2 }
  },
  {
    id: 17,
    name: "น้ำ",
    gender: "หญิง",
    age: 20,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 26,
    goal: "คบหาดูใจ",
    lifestyle: { social: 5, travel: 5, exercise: 2, nightlife: 4, spending: 5 }
  },
  {
    id: 18,
    name: "ข้าว",
    gender: "หญิง",
    age: 21,
    interestedGender: "ชาย",
    minAge: 18,
    maxAge: 28,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 4, travel: 2, exercise: 3, nightlife: 5, spending: 4 }
  },
  {
    id: 19,
    name: "ไอซ์",
    gender: "ไม่ระบุ",
    age: 20,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 27,
    goal: "คุยทำความรู้จัก",
    lifestyle: { social: 4, travel: 4, exercise: 2, nightlife: 3, spending: 3 }
  },
  {
    id: 20,
    name: "ออม",
    gender: "ไม่ระบุ",
    age: 21,
    interestedGender: "ทุกเพศ",
    minAge: 18,
    maxAge: 28,
    goal: "เพื่อนใหม่",
    lifestyle: { social: 4, travel: 3, exercise: 3, nightlife: 4, spending: 3 }
  }
];

const keys = [
  "social",
  "travel",
  "exercise",
  "nightlife",
  "spending"
];

const labels = {
  social: "การเข้าสังคม",
  travel: "การท่องเที่ยว",
  exercise: "การออกกำลังกาย",
  nightlife: "การนอนดึก",
  spending: "การใช้จ่าย"
};

let latestMatches = [];
let latestUser = null;
let latestWeights = null;

function getValue(id) {
  return document.getElementById(id).value;
}

function getNumber(id) {
  return Number(document.getElementById(id).value);
}

function acceptsGender(preference, targetGender) {
  return preference === "ทุกเพศ" || preference === targetGender;
}

function isMutualMatch(user, profile) {
  const userAcceptsProfileGender = acceptsGender(
    user.interestedGender,
    profile.gender
  );

  const profileAcceptsUserGender = acceptsGender(
    profile.interestedGender,
    user.gender
  );

  const userAcceptsProfileAge =
    profile.age >= user.minAge &&
    profile.age <= user.maxAge;

  const profileAcceptsUserAge =
    user.age >= profile.minAge &&
    user.age <= profile.maxAge;

  return (
    userAcceptsProfileGender &&
    profileAcceptsUserGender &&
    userAcceptsProfileAge &&
    profileAcceptsUserAge
  );
}

/* วิธีที่ 1: Weighted Euclidean Similarity */

function calculateWeightedEuclideanDistance(
  userLifestyle,
  profileLifestyle,
  weights
) {
  let total = 0;

  keys.forEach((key) => {
    const x = userLifestyle[key];
    const y = profileLifestyle[key];
    const w = weights[key];

    total += w * Math.pow(x - y, 2);
  });

  return Math.sqrt(total);
}

function calculateMaximumEuclideanDistance(weights) {
  const maximumDifference = 4;
  let total = 0;

  keys.forEach((key) => {
    total += weights[key] * Math.pow(maximumDifference, 2);
  });

  return Math.sqrt(total);
}

function calculateEuclideanSimilarity(distance, maximumDistance) {
  const score = 100 * (1 - distance / maximumDistance);

  return Math.max(0, Math.min(100, score));
}

/* วิธีที่ 2: Weighted Cosine Similarity */

function calculateWeightedCosineSimilarity(
  userLifestyle,
  profileLifestyle,
  weights
) {
  let dotProduct = 0;
  let userMagnitudeSquared = 0;
  let profileMagnitudeSquared = 0;

  keys.forEach((key) => {
    const x = userLifestyle[key];
    const y = profileLifestyle[key];
    const w = weights[key];

    dotProduct += w * x * y;
    userMagnitudeSquared += w * x * x;
    profileMagnitudeSquared += w * y * y;
  });

  const userMagnitude = Math.sqrt(userMagnitudeSquared);
  const profileMagnitude = Math.sqrt(profileMagnitudeSquared);
  const denominator = userMagnitude * profileMagnitude;

  if (denominator === 0) {
    return 0;
  }

  const score = (dotProduct / denominator) * 100;

  return Math.max(0, Math.min(100, score));
}

function getSimilarityReason(userLifestyle, profileLifestyle) {
  const sameItems = [];
  const closeItems = [];

  keys.forEach((key) => {
    const difference = Math.abs(
      userLifestyle[key] - profileLifestyle[key]
    );

    if (difference === 0) {
      sameItems.push(labels[key]);
    } else if (difference === 1) {
      closeItems.push(labels[key]);
    }
  });

  if (sameItems.length > 0) {
    return `คะแนนเท่ากันในด้าน ${sameItems.slice(0, 2).join(" และ ")}`;
  }

  if (closeItems.length > 0) {
    return `คะแนนใกล้เคียงในด้าน ${closeItems.slice(0, 2).join(" และ ")}`;
  }

  return "ผ่านเงื่อนไขเพศและช่วงอายุที่ทั้งสองฝ่ายยอมรับ";
}

function getMethodDifferenceText(euclideanScore, cosineScore) {
  const difference = Math.abs(euclideanScore - cosineScore);

  if (difference < 0.1) {
    return "ทั้งสองวิธีให้ผลใกล้เคียงกันมาก";
  }

  if (euclideanScore > cosineScore) {
    return `Euclidean ให้คะแนนสูงกว่า Cosine ${difference.toFixed(1)} จุดเปอร์เซ็นต์`;
  }

  return `Cosine ให้คะแนนสูงกว่า Euclidean ${difference.toFixed(1)} จุดเปอร์เซ็นต์`;
}

function createScoreChartHTML(match) {
  return `
    <div class="chart-wrapper">
      <p class="chart-title">เปรียบเทียบเปอร์เซ็นต์จาก 2 วิธี</p>

      <div class="chart-row">
        <span>Euclidean</span>
        <div class="chart-track">
          <div
            class="chart-fill-euclidean"
            style="width: ${match.euclideanScore}%"
          ></div>
        </div>
        <strong>${match.euclideanScore.toFixed(1)}%</strong>
      </div>

      <div class="chart-row">
        <span>Cosine</span>
        <div class="chart-track">
          <div
            class="chart-fill-cosine"
            style="width: ${match.cosineScore}%"
          ></div>
        </div>
        <strong>${match.cosineScore.toFixed(1)}%</strong>
      </div>
    </div>
  `;
}

function createLifestyleBarsHTML(userLifestyle, profileLifestyle) {
  return keys
    .map((key) => {
      const difference = Math.abs(
        userLifestyle[key] - profileLifestyle[key]
      );

      const similarityPercent = ((4 - difference) / 4) * 100;

      return `
        <div class="comparison-item">
          <span>${labels[key]}</span>
          <div class="bar">
            <div style="width: ${similarityPercent}%"></div>
          </div>
          <span>${userLifestyle[key]} / ${profileLifestyle[key]}</span>
        </div>
      `;
    })
    .join("");
}

function renderNoMatchMessage() {
  document.getElementById("resultList").innerHTML = `
    <article class="match-card">
      <div class="match-top">
        <div>
          <h3>ยังไม่พบโปรไฟล์ที่ตรงเงื่อนไข</h3>
          <p>
            ลองขยายช่วงอายุ เปลี่ยนเพศที่สนใจ
            หรือปรับเงื่อนไขอีกครั้ง
          </p>
        </div>
      </div>
    </article>
  `;
}

function renderResults(matches, totalMatches, user) {
  const resultSection = document.getElementById("resultSection");
  const resultList = document.getElementById("resultList");
  const resultSummary = document.getElementById("resultSummary");

  resultSection.classList.remove("hidden");
  resultList.innerHTML = "";

  if (matches.length === 0) {
    resultSummary.textContent = "ไม่พบโปรไฟล์ที่ผ่านเงื่อนไขร่วมกัน";
    renderNoMatchMessage();
    return;
  }

  resultSummary.textContent =
    `จากโปรไฟล์จำลอง 20 คน พบ ${totalMatches} คนที่ผ่านเงื่อนไข และแสดง 5 อันดับแรก`;

  matches.forEach((match, index) => {
    const card = document.createElement("article");
    card.className = "match-card";

    card.innerHTML = `
      <div class="match-top">
        <div>
          <h3>#${index + 1} ${match.name}</h3>
          <p>${match.gender} • อายุ ${match.age} ปี • ${match.goal}</p>
        </div>

        <div class="score-box">
          <strong>${match.euclideanScore.toFixed(1)}%</strong>
          <span>คะแนนจัดอันดับ</span>
        </div>
      </div>

      <div class="match-details">
        <div>
          <p>
            <strong>เกณฑ์จัดอันดับ:</strong>
            Weighted Euclidean Similarity
          </p>

          <div class="method-scores">
            <div class="method-score">
              <p>วิธีที่ 1</p>
              <strong>Weighted Euclidean</strong>
              <p>${match.euclideanScore.toFixed(1)}%</p>
            </div>

            <div class="method-score">
              <p>วิธีที่ 2</p>
              <strong>Weighted Cosine</strong>
              <p>${match.cosineScore.toFixed(1)}%</p>
            </div>
          </div>

          <p class="reason">
            <strong>เหตุผลที่แนะนำ:</strong> ${match.reason}
          </p>

          <p class="method-difference">
            <strong>เปรียบเทียบ 2 วิธี:</strong>
            ${getMethodDifferenceText(
              match.euclideanScore,
              match.cosineScore
            )}
          </p>

          <button
            class="detail-button"
            type="button"
            data-profile-id="${match.id}"
          >
            ดูวิธีคิดของทั้ง 2 วิธี
          </button>
        </div>

        <div>
          ${createScoreChartHTML(match)}

          <div class="comparison">
            ${createLifestyleBarsHTML(
              user.lifestyle,
              match.lifestyle
            )}
          </div>
        </div>
      </div>
    `;

    resultList.appendChild(card);
  });

  document.querySelectorAll(".detail-button").forEach((button) => {
    button.addEventListener("click", () => {
      openCalculationModal(Number(button.dataset.profileId));
    });
  });
}

function createCalculationRows(userLifestyle, profileLifestyle, weights) {
  return keys
    .map((key) => {
      const x = userLifestyle[key];
      const y = profileLifestyle[key];
      const w = weights[key];
      const difference = x - y;
      const euclideanPart = w * Math.pow(difference, 2);
      const cosinePart = w * x * y;

      return `
        <tr>
          <td>${labels[key]}</td>
          <td>${x}</td>
          <td>${y}</td>
          <td>${w}</td>
          <td>${difference}</td>
          <td>${euclideanPart}</td>
          <td>${cosinePart}</td>
        </tr>
      `;
    })
    .join("");
}

function openCalculationModal(profileId) {
  const match = latestMatches.find((profile) => profile.id === profileId);

  if (!match || !latestUser || !latestWeights) {
    return;
  }

  const user = latestUser;
  const weights = latestWeights;

  const euclideanSum = keys.reduce((sum, key) => {
    const difference = user.lifestyle[key] - match.lifestyle[key];

    return sum + weights[key] * Math.pow(difference, 2);
  }, 0);

  const dotProduct = keys.reduce((sum, key) => {
    return (
      sum +
      weights[key] *
      user.lifestyle[key] *
      match.lifestyle[key]
    );
  }, 0);

  const userMagnitudeSquared = keys.reduce((sum, key) => {
    return sum + weights[key] * Math.pow(user.lifestyle[key], 2);
  }, 0);

  const profileMagnitudeSquared = keys.reduce((sum, key) => {
    return sum + weights[key] * Math.pow(match.lifestyle[key], 2);
  }, 0);

  const userMagnitude = Math.sqrt(userMagnitudeSquared);
  const profileMagnitude = Math.sqrt(profileMagnitudeSquared);

  document.getElementById("modalBody").innerHTML = `
    <p class="eyebrow">รายละเอียดการคำนวณ</p>
    <h2>${user.name} เปรียบเทียบกับ ${match.name}</h2>

    <p class="modal-intro">
      x คือคะแนนของ ${user.name}, y คือคะแนนของ ${match.name}
      และ w คือค่าน้ำหนักที่ผู้ใช้เลือก
    </p>

    <div class="modal-table-wrapper">
      <table class="modal-table">
        <thead>
          <tr>
            <th>ด้าน</th>
            <th>x</th>
            <th>y</th>
            <th>w</th>
            <th>x - y</th>
            <th>w(x-y)²</th>
            <th>wxy</th>
          </tr>
        </thead>

        <tbody>
          ${createCalculationRows(
            user.lifestyle,
            match.lifestyle,
            weights
          )}
        </tbody>
      </table>
    </div>

    <section class="calculation-box">
      <h3>วิธีที่ 1: Weighted Euclidean Similarity</h3>

      <div class="math-line">
        d = √[Σwᵢ(xᵢ - yᵢ)²]
      </div>

      <div class="math-line">
        d = √(${euclideanSum.toFixed(2)})
        = ${match.distance.toFixed(4)}
      </div>

      <div class="math-line">
        d<sub>max</sub> = √[16Σwᵢ]
        = ${match.maxDistance.toFixed(4)}
      </div>

      <div class="math-line">
        Similarity = 100(1 - d / d<sub>max</sub>)
      </div>

      <div class="math-line">
        = 100(1 - ${match.distance.toFixed(4)} /
        ${match.maxDistance.toFixed(4)})
        = <strong>${match.euclideanScore.toFixed(2)}%</strong>
      </div>
    </section>

    <section class="calculation-box">
      <h3>วิธีที่ 2: Weighted Cosine Similarity</h3>

      <div class="math-line">
        Cosine =
        Σ(wᵢxᵢyᵢ) /
        [√Σ(wᵢxᵢ²) × √Σ(wᵢyᵢ²)]
      </div>

      <div class="math-line">
        Σ(wᵢxᵢyᵢ) = ${dotProduct.toFixed(2)}
      </div>

      <div class="math-line">
        √Σ(wᵢxᵢ²) = √${userMagnitudeSquared.toFixed(2)}
        = ${userMagnitude.toFixed(4)}
      </div>

      <div class="math-line">
        √Σ(wᵢyᵢ²) = √${profileMagnitudeSquared.toFixed(2)}
        = ${profileMagnitude.toFixed(4)}
      </div>

      <div class="math-line">
        Cosine Similarity =
        (${dotProduct.toFixed(2)} /
        (${userMagnitude.toFixed(4)} × ${profileMagnitude.toFixed(4)}))
        × 100
        = <strong>${match.cosineScore.toFixed(2)}%</strong>
      </div>
    </section>

    <div class="summary-box">
      <strong>สรุปผล</strong><br />
      Weighted Euclidean Similarity:
      ${match.euclideanScore.toFixed(2)}%<br />
      Weighted Cosine Similarity:
      ${match.cosineScore.toFixed(2)}%<br /><br />
      ${getMethodDifferenceText(
        match.euclideanScore,
        match.cosineScore
      )}<br /><br />
      <strong>
        คะแนนที่ใช้จัดอันดับคือ Weighted Euclidean Similarity เท่านั้น
      </strong>
    </div>
  `;

  document.getElementById("calculationModal").classList.remove("hidden");
}

function closeCalculationModal() {
  document.getElementById("calculationModal").classList.add("hidden");
}

function getUserData() {
  return {
    name: getValue("name").trim() || "ผู้ใช้",
    age: getNumber("age"),
    gender: getValue("gender"),
    interestedGender: getValue("interestedGender"),
    minAge: getNumber("minAge"),
    maxAge: getNumber("maxAge"),
    goal: getValue("relationshipGoal"),
    lifestyle: {
      social: getNumber("social"),
      travel: getNumber("travel"),
      exercise: getNumber("exercise"),
      nightlife: getNumber("nightlife"),
      spending: getNumber("spending")
    }
  };
}

function getWeights() {
  return {
    social: getNumber("weightSocial"),
    travel: getNumber("weightTravel"),
    exercise: getNumber("weightExercise"),
    nightlife: getNumber("weightNightlife"),
    spending: getNumber("weightSpending")
  };
}

function validateUserData(user) {
  if (user.age < 18 || user.age > 80) {
    alert("กรุณากรอกอายุระหว่าง 18–80 ปี");
    return false;
  }

  if (user.minAge < 18 || user.maxAge > 80) {
    alert("กรุณากรอกช่วงอายุที่ต้องการระหว่าง 18–80 ปี");
    return false;
  }

  if (user.minAge > user.maxAge) {
    alert("อายุขั้นต่ำต้องไม่มากกว่าอายุสูงสุด");
    return false;
  }

  return true;
}

document.getElementById("matchButton").addEventListener("click", () => {
  const user = getUserData();
  const weights = getWeights();

  if (!validateUserData(user)) {
    return;
  }

  const maxDistance = calculateMaximumEuclideanDistance(weights);

  const allMatches = profiles
    .filter((profile) => isMutualMatch(user, profile))
    .map((profile) => {
      const distance = calculateWeightedEuclideanDistance(
        user.lifestyle,
        profile.lifestyle,
        weights
      );

      const euclideanScore = calculateEuclideanSimilarity(
        distance,
        maxDistance
      );

      const cosineScore = calculateWeightedCosineSimilarity(
        user.lifestyle,
        profile.lifestyle,
        weights
      );

      return {
        ...profile,
        distance,
        maxDistance,
        euclideanScore,
        cosineScore,
        reason: getSimilarityReason(
          user.lifestyle,
          profile.lifestyle
        )
      };
    })

    /* เรียงอันดับด้วย Euclidean เท่านั้น ไม่มีโบนัส */
    .sort((profileA, profileB) => {
      return profileB.euclideanScore - profileA.euclideanScore;
    });

  const topFiveMatches = allMatches.slice(0, 5);

  latestMatches = topFiveMatches;
  latestUser = user;
  latestWeights = weights;

  renderResults(topFiveMatches, allMatches.length, user);

  document.getElementById("resultSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

document
  .getElementById("closeModal")
  .addEventListener("click", closeCalculationModal);

document
  .getElementById("modalOverlay")
  .addEventListener("click", closeCalculationModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCalculationModal();
  }
});