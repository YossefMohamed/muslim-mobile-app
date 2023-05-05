import requestList from "./requestList";
import requestSurah from "./requestSurah";

export default class Quran {
  static getChaptersList() {
    return requestList({
      url: "/chapters?language=ar",
      method: "GET",
    });
  }

  static getJuzaList() {
    return requestList({
      url: "/juzs",
      method: "GET",
    });
  }

  static getChapterById(id: number) {
    return requestSurah({
      url: `/surah/${id}/editions/quran-uthmani,en.asad?`,
      method: "GET",
    });
  }

  static getJuzaById(id: number) {
    return requestSurah({
      url: `/juz/${id}/quran-uthmani`,
      method: "GET",
    });
  }

  static getEnglishJuzaById(id: number) {
    return requestSurah({
      url: `/juz/${id}/en.asad?`,
      method: "GET",
    });
  }

  static getVerseMeaningByIdAndSurah(id: number) {
    return requestSurah({
      url: `/ayah/${id}/ar.muyassar`,
      method: "GET",
    });
  }
}
