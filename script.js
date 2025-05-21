const value = 47; // example input
const min = 0;
const max = 225;

const labels = [
    { label: "A+", min: 0, max: 25 },
    { label: "A", min: 25, max: 50 },
    { label: "B", min: 50, max: 75 },
    { label: "C", min: 75, max: 100 },
    { label: "D", min: 100, max: 125 },
    { label: "UND", min: 125, max: 150 },
    { label: "F", min: 150, max: 175 },
    { label: "G", min: 175, max: 200 },
    { label: "H", min: 200, max: 225 }
];

const marker = document.getElementById('marker');
const circle = document.getElementById('circle');

// Find the matching range
const range = labels.find(r => value >= r.min && value < r.max);

if (range) {
    const midValue = (range.min + range.max) / 2;
    const percent = ((midValue - min) / (max - min)) * 100;

    marker.style.left = `${percent}%`;
    circle.style.left = `${percent}%`;

    marker.textContent = `${value} kw/m2 ein`;
    circle.textContent = range.label;

    // Determine color based on range
    let color = '#36bf3e'; // default

    if (value <= 25) color = '#36bf3e';
    else if (value <= 50) color = '#84d423';
    else if (value <= 75) color = '#b9d812';
    else if (value <= 100) color = '#d7bd0b';
    else if (value <= 125) color = '#e81300';
    else if (value <= 150) color = '#fb7c00';
    else if (value <= 175) color = '#f45a00';
    else if (value <= 200) color = '#ed3200';
    else color = '#e81300';
    // Apply dynamic color to marker and circle
    circle.style.backgroundColor = color;
}