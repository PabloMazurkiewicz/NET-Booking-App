﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Script for simple search in CRUD
$(document).ready(function () {
	$("#searchInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#resultTable tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});	


$(document).ready(function () {
	$("#uploadPictures").on("change", function () {
		$("#uploadPicturesForm").submit();
	});

	$("#uploadPicturesBtn").hide();
});