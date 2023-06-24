
-- create
CREATE TABLE Users (
id INTEGER PRIMARY KEY,
name TEXT NOT NULL,
age INTEGER NOT NULL,
address TEXT NOT NULL
);

-- insert
INSERT INTO Users VALUES (0001, 'Иван', 18, 'Москва');
INSERT INTO Users VALUES (0002, 'Петр', 22, 'Иваново');
INSERT INTO Users VALUES (0003, 'Анна', 35, 'Питер');
INSERT INTO Users VALUES (0004, 'Юлия', 18, 'Москва');
INSERT INTO Users VALUES (0005, 'Николай', 36, 'Москва');

select * from Users where age >= 18;



<?php
// ????????? ?????? c ?????? ??????
$job = [
'job_name' => ['GB', '??????? ???', '?????? ????????'],
'job_data' => ['2022-????????? ?????', '2000-2006', '1999-2000'],
'job_desc' => ['????? ?????????? ??????', '?????? ??????', '????? ????? ?????????? ??????']
]
?>

<div class="w3-container w3-card w3-white w3-margin-bottom">
<h2 class="w3-text-grey w3-padding-16"><i
class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>???? ??????</h2>
<div class="w3-container">
<h5 class="w3-opacity"><b>
<?php echo $job['job_name'][0]; ?>
</b></h5>
<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>
<?php echo $job['job_data'][0]; ?>
</h6>
<p>
<?php echo $job['job_desc'][0]; ?>
</p>
<hr>
</div>
<div class="w3-container">
<h5 class="w3-opacity"><b>
<?php echo $job['job_name'][1]; ?>
</b></h5>
<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>
<?php echo $job['job_data'][1]; ?>
</h6>
<p>
<?php echo $job['job_desc'][1]; ?>
</p>
<hr>
</div>
<div class="w3-container">
<h5 class="w3-opacity"><b>
<?php echo $job['job_name'][2]; ?>
</b></h5>
<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>
<?php echo $job['job_data'][2]; ?>
</h6>
<p>
<?php echo $job['job_desc'][2]; ?>
</p><br>
</div>
</div>
