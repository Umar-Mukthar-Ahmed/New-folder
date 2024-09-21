let user = document.getElementById("userform");

let retrieveEntries = () => {
  let entries = localStorage.getItem("userEntries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};

let userEntries = retrieveEntries();

const DisplayEntries = () => {
  let entries = retrieveEntries();

  const tableEntries = entries
    .map((entry) => {
      const name = `<td class="border border-slate-700 ...">${entry.name}</td>`;
      const email = `<td class="border border-slate-700 ...">${entry.email}</td>`;
      const password = `<td class="border border-slate-700 ...">${entry.password}</td>`;
      const dob = `<td class="border border-slate-700 ...">${entry.dob}</td>`;
      const condition = `<td class="border border-slate-700 ...">${entry.termsAndCondition}</td>`;

      const row = `<tr>${name} ${email} ${dob} ${password} ${condition}</tr> `;

      return row;
    })
    .join("\n");

  const table = `<table class="table-auto w-full"><tr>
<th class="px-4 py-2">Name</th>
<th class="px-4 py-2">Email</th>
<th class="px-4 py-2">DOB</th> 
<th class="px-4 py-2">Password</th>
<th class="px-4 py-2">Accepted Terms?</th>
</tr>${tableEntries} </table>`;

  let details = document.getElementById("userEntries");
  details.innerHTML = table;
};

let saveData = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const termsAndCondition = document.getElementById("check").checked;

  const entry = {
    name,
    email,
    dob,
    password,
    termsAndCondition,
  };

  userEntries.push(entry);

  localStorage.setItem("userEntries", JSON.stringify(userEntries));
  DisplayEntries(); // Corrected to call the function
};

user.addEventListener("submit", saveData);
DisplayEntries();
