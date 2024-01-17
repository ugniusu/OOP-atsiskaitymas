const container = document.getElementById("container");

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static increaseCard = 0;

  getInfo() {
    Animal.increaseCard += 1;
    const card = document.createElement("div");
    card.className = "cards" + Animal.increaseCard;
    let animalType = document.createElement("h2");
    let name = document.createElement("p");
    name.textContent = `Name: ${this.name}`;
    let age = document.createElement("p");
    age.textContent = `Age: ${this.age}`;

    card.append(animalType, name, age);
    container.appendChild(card);
  }
}

class Fish extends Animal {
  constructor(name, age, tail, jaw) {
    super(name, age);
    this.tail = tail;
    this.jaw = jaw;
  }

  getInfo() {
    super.getInfo();
    const card = document.querySelector(".cards" + Animal.increaseCard);
    let animalType = document.createElement("h2");
    animalType.textContent = "Fish";
    card.prepend(animalType);

    let cardTail = document.createElement("p");
    cardTail.textContent = `Tail: ${this.tail}`;
    card.append(cardTail);
    let cardJaw = document.createElement("p");
    cardJaw.textContent = `Jaw: ${this.jaw}`;
    card.append(cardJaw);
  }
}

class Cat extends Animal {
  constructor(name, age, legs, fur, whiskers, tail) {
    super(name, age);
    this.legs = legs;
    this.fur = fur;
    this.whiskers = whiskers;
    this.tail = tail;
  }

  getInfo() {
    super.getInfo();
    const card = document.querySelector(".cards" + Animal.increaseCard);
    let animalType = document.createElement("h2");
    animalType.textContent = "Cat";
    card.prepend(animalType);

    let legs = document.createElement("p");
    legs.textContent = `Legs: ${this.legs}`;
    card.append(legs);
    let fur = document.createElement("p");
    fur.textContent = `Fur: ${this.fur}`;
    card.append(fur);
    let tail = document.createElement("p");
    tail.textContent = `Tail: ${this.tail}`;
    card.append(tail);
    let whiskers = document.createElement("p");
    whiskers.textContent = `Whiskers: ${this.whiskers}`;
    card.append(whiskers);
  }
}

class Bird extends Animal {
  constructor(name, age, legs, wings, beak) {
    super(name, age);
    this.legs = legs;
    this.wings = wings;
    this.beak = beak;
  }

  getInfo() {
    super.getInfo();
    const card = document.querySelector(".cards" + Animal.increaseCard);
    let animalType = document.createElement("h2");
    animalType.textContent = "Bird";
    card.prepend(animalType);

    let legs = document.createElement("p");
    legs.textContent = `Legs: ${this.legs}`;
    card.append(legs);
    let wings = document.createElement("p");
    wings.textContent = `Wings: ${this.wings}`;
    card.append(wings);
    let beak = document.createElement("p");
    beak.textContent = `Beak: ${this.beak}`;
    card.append(beak);
  }
}

function createForm(animalType, submitCallback, ...labelsAndInputs) {
  const form = document.createElement("form");
  labelsAndInputs.forEach(([labelText, inputId]) => {
    const label = document.createElement("label");
    label.textContent = `${labelText}: `;
    const input = document.createElement("input");
    input.id = inputId;
    form.appendChild(label);
    form.appendChild(input);
  });

  const button = document.createElement("button");
  button.innerText = "Submit";
  button.id = "submitBtn";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    submitCallback();
  });

  form.appendChild(button);
  container.append(form);
}

function fishForm() {
  createForm(
    "Fish",
    () => {
      const petName = document.getElementById("name").value;
      const petAge = document.getElementById("age").value;
      const perTail = document.getElementById("tail").value;
      const petJaw = document.getElementById("jaw").value;
      const fishN = new Fish(petName, petAge, perTail, petJaw);
      fishN.getInfo();

      const card = document.querySelector(".cards" + Animal.increaseCard);
      card.classList.add("cardsFish");
    },
    ["Name", "name"],
    ["Age", "age"],
    ["Tail", "tail"],
    ["Jaw", "jaw"]
  );
}

function CatForm() {
  createForm(
    "Cat",
    () => {
      const petName = document.getElementById("name").value;
      const petAge = document.getElementById("age").value;
      const petLegs = document.getElementById("legs").value;
      const petFur = document.getElementById("fur").value;
      const perTail = document.getElementById("tail").value;
      const perWhiskers = document.getElementById("whiskers").value;
      const cat = new Cat(
        petName,
        petAge,
        petLegs,
        petFur,
        perTail,
        perWhiskers
      );
      cat.getInfo();

      const card = document.querySelector(".cards" + Animal.increaseCard);
      card.classList.add("cardsCat");
    },
    ["Name", "name"],
    ["Age", "age"],
    ["Legs", "legs"],
    ["Fur", "fur"],
    ["Tail", "tail"],
    ["Whiskers", "whiskers"]
  );
}

function BirdForm() {
  createForm(
    "Bird",
    () => {
      const petName = document.getElementById("name").value;
      const petAge = document.getElementById("age").value;
      const petLegs = document.getElementById("legs").value;
      const petWings = document.getElementById("wings").value;
      const perBeak = document.getElementById("beak").value;
      const bird = new Bird(petName, petAge, petLegs, petWings, perBeak);
      bird.getInfo();

      const card = document.querySelector(".cards" + Animal.increaseCard);
      card.classList.add("cardsBird");
    },
    ["Name", "name"],
    ["Age", "age"],
    ["Legs", "legs"],
    ["Wings", "wings"],
    ["Beak", "beak"]
  );
}

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const fishButton = document.createElement("button");
fishButton.textContent = "Fish";
fishButton.addEventListener("click", () => {
  if (document.querySelector("form") == null) {
    fishForm();
  } else {
    fishForm();
    container.removeChild(document.querySelector("form"));
  }
});

const catButton = document.createElement("button");
catButton.textContent = "Cats";
catButton.addEventListener("click", () => {
  if (document.querySelector("form") == null) {
    CatForm();
  } else {
    CatForm();
    container.removeChild(document.querySelector("form"));
  }
});

const birdButton = document.createElement("button");
birdButton.textContent = "Birds";
birdButton.addEventListener("click", () => {
  if (document.querySelector("form") == null) {
    BirdForm();
  } else {
    container.removeChild(document.querySelector("form"));
    BirdForm();
  }
});

buttons.append(fishButton, catButton, birdButton);
container.appendChild(buttons);
