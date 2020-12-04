import { useEffect, useState } from "react";
import useFecth from "../../utils/useFetch";

const Siswa = () => {
	const [topGrade, setTopGrade] = useState(null);
	const [activity, setActivity] = useState(null);
	const [students, setStudents] = useState(null);
	const [mapel, setMapel] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			// topgrade
			const topGrade = await useFecth(
				"http://ajaruji-grade-alpha.demo.klik.digital/topgrade/siswa"
			);
			setTopGrade(topGrade);

			// activity
			const getActivityData = await useFecth(
				"http://ajaruji-question-alpha.demo.klik.digital/list/activity"
			);
			setActivity(getActivityData);

			// mapel
			const getMapelData = await useFecth(
				"http://ajaruji-question-alpha.demo.klik.digital/list/mapel"
			);
			setMapel(getMapelData);

			// students
			const getStudentData = await useFecth(
				"http://ajaruji-grade-alpha.demo.klik.digital/dashboard/siswa"
			);
			setStudents(getStudentData);
		};

		fetchData();
	}, []);

	console.log(topGrade);

	return <h1>Halaman dashboard siswa</h1>;
};

export default Siswa;
